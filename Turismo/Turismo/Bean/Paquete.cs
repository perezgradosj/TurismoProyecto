using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Turismo.Bean
{
    public class Paquete
    {
        public string fecha_public_desde { get; set; }
        public string fecha_public_hasta { get; set; }

        public int dias { get; set; }
        public int noches { get; set; }

        public int disponibles { get; set; }
        public int minPasajeros { get; set; }
        public int horasAnticipado { get; set; }

        public string titulo { get; set; }
        public string destino { get; set; }

        public string tipoAlojamiento { get; set; }
        public string nomAlojamiento { get; set; }
        public string alimAlojamiento { get; set; }

        public int precioHabDobleTripe { get; set; }
        public int precioHabSimple { get; set; }

        public HttpPostedFileBase foto1 { get; set; }
        public string foto1Name { get; set; }
        public HttpPostedFileBase foto2 { get; set; }
        public HttpPostedFileBase foto3 { get; set; }
        public HttpPostedFileBase foto4 { get; set; }
        public HttpPostedFileBase foto5 { get; set; }
        public HttpPostedFileBase foto6 { get; set; }

        public int idusuario { get; set; }
        public int idestado { get; set; }
    }
}