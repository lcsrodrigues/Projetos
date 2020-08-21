namespace AgendaContatosRepository.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AgendaContatosRepository.Context.ContatoContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AgendaContatosRepository.Context.ContatoContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.
            //  O comando abaixo é responsavel por gerar registros default em uma tabela
            
            // context.TABELA.AddOrUpdate(
            // p => p.CAMPO_NOME,
            // new TABELA { CAMPO_NOME = "Masculino" },
            // 1new TABELA { CAMPO_NOME = "Feminino" });
        }
    }
}
