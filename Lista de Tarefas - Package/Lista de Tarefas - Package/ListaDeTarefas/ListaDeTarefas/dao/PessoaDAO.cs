using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ListaDeTarefas.model;
using ListaDeTarefas.connection;

namespace ListaDeTarefas.dao
{
    public class PessoaDAO
    {

        public connectionDataContext cdc;

        public bool createNewPessoa( Pessoa pessoa )
        {
            try
            {
                cdc = new connectionDataContext();
                PESSOA oPessoa = new PESSOA();

                oPessoa.NOME = pessoa.nome;
                oPessoa.EMAIL = pessoa.email;
                oPessoa.GENERO = pessoa.genero;
                oPessoa.SENHA = pessoa.senha;
                oPessoa.CPF = pessoa.CPF;

                cdc.PESSOA.InsertOnSubmit(oPessoa);
                cdc.SubmitChanges();

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;   
            }
            finally
            {
                cdc.Dispose();
            }
        }

        public List<Pessoa> getAllPessoa()
        {
            cdc = new connectionDataContext();

            try
            {
                List<Pessoa> listPessoa = new List<Pessoa>();
                Pessoa pessoa;

                var listaPessoa = from pessoas in cdc.PESSOA
                                  select pessoas;

                foreach (var p1 in listaPessoa)
                {
                    pessoa = new Pessoa();

                    pessoa.ID = p1.ID;
                    pessoa.CPF = p1.CPF;
                    pessoa.nome = p1.NOME;
                    pessoa.email = p1.EMAIL;
                    pessoa.genero = p1.GENERO;
                        
                    listPessoa.Add(pessoa);
                }


                return listPessoa;
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                cdc.Dispose();
            }
        }

        public Pessoa getPessoaByCPF(Pessoa paramPessoa)
        {
            cdc = new connectionDataContext();
            Pessoa pessoa = new Pessoa();

            var pessoaSource = from user in cdc.PESSOA
                               where user.CPF == paramPessoa.CPF
                               select user;

            foreach(var oUser in pessoaSource)
            {
                pessoa.CPF = oUser.CPF;
                pessoa.nome = oUser.NOME;
                pessoa.genero = oUser.GENERO;
            }

            return pessoa;
        }

        public Pessoa getPessoaByEmail(Pessoa paramPessoa)
        {
            try
            {
                cdc = new connectionDataContext();
                Pessoa pessoa = new Pessoa();

                var pessoaSource = from user in cdc.PESSOA
                                   where user.EMAIL == paramPessoa.email
                                   select user;

                foreach (var oUser in pessoaSource)
                {
                    pessoa.ID = oUser.ID;
                    pessoa.CPF = oUser.CPF;
                    pessoa.nome = oUser.NOME;
                    pessoa.genero = oUser.GENERO;
                }

                return pessoa;
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                cdc.Dispose();
            }
        }
    }
}