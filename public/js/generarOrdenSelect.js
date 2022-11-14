
        <script language="JavaScript">


        function sublist(inform, selecteditem)
         {
            var x = 0;
            test = 0;
            inform.id_contrato.length = 1

            <% for( let f = 0; f < contratos.length; f++ ) { %>

                x = <%= contratos[f].cliente_id %>;

                subcat = new Array();
                id_contratos = "<%= contratos[f].id_contrato %> - <%= contratos[f].TipoContrato.tipo_contrato_sigla %>";
                id_contratoof = "<%= contratos[f].cliente_id %>";
                id_contratoidi = "<%= contratos[f].id_contrato %>";
                subcat[x,0] = id_contratos;
                subcat[x,1] = id_contratoof;
                subcat[x,2] = id_contratoidi;
                if (subcat[x,1] == selecteditem) {
                var option<%= contratos[f].cliente_id %> = new Option(subcat[x,0], subcat[x,2]);
                inform.id_contrato.options[inform.id_contrato.length]=option<%= contratos[f].cliente_id %>;

                }

            <% } %>


        }
        </script>
        <script language="JavaScript">
          function sublist2(inform, selecteditem)
          {
            //var x = 0;
            <% x = 0  %>
          inform.serie.length = 1



          <% for( let f = 0; f < equipos.length; f++ ) { %>

            <% x = x + 1 %>;

            subcat = new Array();
            serie_ids = "<%= equipos[f].serie_cliente %> - <%= equipos[f].DetalleEquipo.ModeloEquipo.modelo %>";
            serie_idof = "<%= equipos[f].contrato_id %>";
            serie_ididi = "<%= equipos[f].serie_cliente %>";
            subcat[<%= x %>,0] = serie_ids;
            subcat[<%= x %>,1] = serie_idof;
            subcat[<%= x %>,2] = serie_ididi;
            if (subcat[<%= x %>,1] == selecteditem) {
                var <%= "option"+x %> = new Option(subcat[<%= x %>,0], subcat[<%= x %>,2]);
                inform.serie.options[inform.serie.length]= <%= "option"+x %>;
            }
            <% } %>
          }
        </script>