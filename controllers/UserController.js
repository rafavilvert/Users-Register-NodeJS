var User = require("../models/User");
var PasswordToken = require("../models/PasswordToken");

class UserController {
  async index(req, res) {
    var users = await User.findAll();
    res.json({ users });
  }

  async findUser(req, res) {
    var id = req.params.id;
    var user = await User.findById(id);
    if (user == undefined) {
      res.status(404);
      res.json({});
    } else {
      res.status(200);
      res.json(user);
    }
  }

  async create(req, res) {
    var { name, email, password } = req.body;

    if (email == undefined) {
      res.status(400);
      res.json({ err: "Email inválido" });
      return;
    }
    var emailExist = await User.findEmail(email);
    if (emailExist) {
      res.status(406);
      res.json({ err: "Email já está em uso" });
      return;
    }
    await User.new(email, password, name);
    res.status(200);
    res.send("Tudo Ok!");
  }

  async edit(req, res) {
    var { id, email, name, role } = req.body;
    var result = await User.update(id, email, name, role);

    if (result != undefined) {
      if (result.status) {
        res.status(200);
        res.send("Usuário atualizado com sucesso!");
      } else {
        res.status(500);
        res.json(result.err);
      }
    } else {
      res.status(500);
      res.json(result.err);
    }
  }

  async delete(req, res) {
    var id = req.params.id;

    var result = await User.delete(id);

    if (result.status) {
      res.status(200);
      res.send("Usuário deletado com sucesso!");
    } else {
      res.status(406);
      res.send(result.err);
    }
  }

  async recoverPassword(req, res) {
    var email = req.body.email;

    var result = await PasswordToken.create(email);

    if (result.status == true) {
      res.status(200);
      res.send(String(result.token));

      // Enviar email com token
    } else {
      res.status(406);
      res.send(result.err);
    }
  }

  async changePassword(req, res) {
    var token = req.body.token;
    var password = req.body.password;

    var isTokenValid = await PasswordToken.validate(token);

    if (isTokenValid.status) {
      await User.changePassword(password, isTokenValid.token.user_id, isTokenValid.token.token);
      res.status(200);
      res.send("Senha alterada com sucesso");
    } else {
      res.status(406);
      res.send("Token inválido");
    }
  }
  
}

module.exports = new UserController();
