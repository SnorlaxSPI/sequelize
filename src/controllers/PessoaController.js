const database = require('../models');

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(error.message);
    }    
  }
  
  static async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id)}});
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  
  /**
  * Método: CRUD - realizaremos a primeira opção é Criar um registro
  */
  
  // criando um registro - .post

  static async criaPessoa(req, res) {
    const novaPessoa = req.body;      
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  
  // atualizar um registro - .put
  
  static async atualizaPessoa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    
    try {
      await database.Pessoas.update(novasInfos, { where: { id: Number( id )}});   
      const PessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id)}});
      return res.status(200).json(PessoaAtualizada);
    }  catch (error) {
      return res.status(500).json(error.message);
    }
  }
  
  // deletar registros - .delete

  static async apagaPessoa(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) }});
      return res.status(200).json({ mensagem: `ID ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message);
    }
  } 
}

module.exports = PessoaController;
