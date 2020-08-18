using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Treinamento_aspnet_mvc.Startup))]
namespace Treinamento_aspnet_mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
