using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiListaTarefas.Connection;
using WebApiListaTarefas.Models;

namespace WebApiListaTarefas.DAO
{
    public class PessoaDAO
    {
        ConnectionDataContext cdc;
        public List<Pessoa> getAllPessoas()
        {
            try
            {
                cdc = new ConnectionDataContext();

                List<Pessoa> pessoas = new List<Pessoa>();
                Pessoa pessoa;

                var sourcePessoa = from p in cdc.PESSOA
                                   select p;

                foreach(var p1 in sourcePessoa)
                {
                    pessoa = new Pessoa();

                    pessoa.ID = p1.ID;
                    pessoa.CPF = p1.CPF;
                    pessoa.nome = p1.NOME.Trim();
                    pessoa.email = p1.EMAIL.Trim();
                    pessoa.genero = p1.GENERO.Trim();
                    
                    pessoas.Add(pessoa);
                }

                return pessoas;

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

        public Pessoa getPessoaByID(int ID)
        {
            try
            {
                cdc = new ConnectionDataContext();

                Pessoa pessoa = new Pessoa();

                var sourcePessoa = from p in cdc.PESSOA
                                   where p.ID == ID
                                   select p;

                foreach (var p1 in sourcePessoa)
                {
                    pessoa.ID = p1.ID;
                    pessoa.CPF = p1.CPF;
                    pessoa.nome = p1.NOME.Trim();
                    pessoa.email = p1.EMAIL.Trim();
                    pessoa.genero = p1.GENERO.Trim();
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

        public Pessoa getPessoaByCPF(Int64 CPF)
        {
            try
            {
                cdc = new ConnectionDataContext();

                Pessoa pessoa = new Pessoa();

                var sourcePessoa = from p in cdc.PESSOA
                                   where p.CPF == CPF
                                   select p;

                foreach (var p1 in sourcePessoa)
                {
                    pessoa.ID = p1.ID;
                    pessoa.CPF = p1.CPF;
                    pessoa.nome = p1.NOME.Trim();
                    pessoa.email = p1.EMAIL.Trim();
                    pessoa.genero = p1.GENERO.Trim();
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

        public bool createNewPessoa(Pessoa pessoa)
        {
            try
            {
                cdc = new ConnectionDataContext();
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

        public bool deletePessoa(Pessoa pessoa)
        {
            cdc = new ConnectionDataContext();
            try
            {
                var p1 = cdc.PESSOA.First(p => p.ID == pessoa.ID);
                cdc.PESSOA.DeleteOnSubmit(p1);
                cdc.SubmitChanges();

                return true;
            }
            catch (Exception)
            {

                throw;
            }

        }

        public bool updatePessoa(Pessoa pessoa)
        {
            cdc = new ConnectionDataContext();
            try
            {
                var p1 = cdc.PESSOA.First(p => p.ID == pessoa.ID);
                p1.NOME = pessoa.nome;
                p1.CPF = pessoa.CPF;
                p1.GENERO = pessoa.genero;
                p1.SENHA = pessoa.senha;
                p1.EMAIL = pessoa.email;

                cdc.SubmitChanges();

                return true;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}