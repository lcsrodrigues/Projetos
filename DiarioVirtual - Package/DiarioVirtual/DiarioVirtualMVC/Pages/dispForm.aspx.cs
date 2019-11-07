using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DiarioVirtualMVC.Pages
{
    public partial class dispForm : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string id = Request.QueryString["i"];
            if(!IsPostBack)
            {

            }
        }
    }
}