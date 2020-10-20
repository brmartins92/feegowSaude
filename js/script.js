$(document).ready(function() {
  

  btnTodosMedicos();
  listSources();
  listEspecialidades();
  listProfissionais();
  listaProfissionaisAbrir();
  mask();
  btnSolicitarHorario();
});

/* function html click */
function selecionaMedico(profissional_id,idCardMedico)  {  
 
  var especialidade_id = $('#selectEspecialidades').val();

  $('#profissional_id').val(profissional_id)
  $('#especialidade_id').val(especialidade_id);
  
  $(".cardMedicos").hide();
  $("#"+idCardMedico).show();
  $("#divReserva").show();

}

btnTodosMedicos = () => {
  $("#btnTodosMedicos").click(function(){
    $(".cardMedicos").show();
    $('#profissional_id').val("");
    $('#especialidade_id').val("");
    $("#divReserva").hide();
  })
}

 listSources = () => {

  var url = 'actions/listSources.php';
  axios.get(url).then(function(response) {
      response.data.content.forEach(value  => {
        $("#listSources").append("<option value ="+value.origem_id+">"+ value.nome_origem +"</option>")
      });
     
      // ...
  }).catch(function(error) {
    console.log(error);
      //...
  });

}

 listEspecialidades = () => {
  var url = 'actions/listEspecialidades.php';
  axios.get(url).then(function(response) {
      response.data.content.forEach(value  => {
        $("#selectEspecialidades").append("<option value ="+value.especialidade_id+">"+ value.nome +"</option>")
      });
      // ...
  }).catch(function(error) {
    console.log(error);
      //...
  });
}

listProfissionais = () => {

  $("#selectEspecialidades").change(function(){
   var especialidade_id = $("#selectEspecialidades").val();
   $("#listMedicos").html("");
   $("#listMedicos").hide();
  
    var url = `actions/listProfissionais.php?especialidade_id=${especialidade_id}`;
    axios.get(url).then(function(response) {
           var i = 1;
        response.data.profissionais.forEach(value  => {
          i++;
          var idMedico= "cardsM"+i;

            if(value.foto == null || value.foto == ""){
             value.foto = "img/semFoto.jpeg";
            }

            if(value.conselho == null || value.conselho == ""){
              value.conselho = "S/conselho";
            }
            if(value.documento_conselho == null || value.documento_conselho == ""){
              value.documento_conselho = "S/numero";
            }
            
            $("#listMedicos").append(""+
              "<div class='cardMedicos' id='"+idMedico+"'>"+
                "<div class='divIconeMedico'>"+
                  "<img class='imgIcone' src='"+value.foto+"'>"+
                "</div>"+
                "<div class='divInfoMedico ml-2'>"+
                "<span data-toggle='tooltip' data-placement='bottom' title="+ value.nome + "><h5><b>"+value.nome+"</h5></b></span>"+
                "<span>"+value.conselho+""+value.documento_conselho+"</span>"+
                "<button type='button' class=' mt-2 btn btn-success borderRadius btnAgendar btn-sm' onclick='selecionaMedico(\""+value.profissional_id+"\",\""+idMedico+"\" ) '> Agendar</button> "+
                "</div>"+
              "</div>"
            );

           
          
        });
        $('[data-toggle="tooltip"]').tooltip();
      
        // ...
    }).catch(function(error) {
      console.log(error);
        //...
    });
    

  });
}

listaProfissionaisAbrir = () => {
  $("#btnPesquisar").click (function(){
    $("#listMedicos").show();
    $("#divReserva").hide();
    var especialidade = $("#selectEspecialidades option:selected").text();
    $("#titleBusca").html('<h5><b>Médicos Encontrados da especialidade: '+ especialidade +'<b></h5>');
  });
}

mask = () => {
  $('#dtNascimento').mask('00/00/0000');
  $('#cpf').mask('000.000.000-00');
}

btnSolicitarHorario = () => {
  $('#btnSolicitarHorario').click(function(){
    var especialidade_id = $('#especialidade_id').val();
    var profissional_id  = $('#profissional_id').val();
    var nome             = $('#nome').val();
    var indicacao        = $('#listSources').val();
    var cpf              = $('#cpf').val();
    var nascimento       = $('#dtNascimento').val();  
   
    axios.post('actions/agendarConsulta.php', JSON.stringify({
      especialidade_id: especialidade_id,
      profissional_id:profissional_id,
      nome:nome,
      indicacao:indicacao,
      cpf:cpf,
      nascimento:nascimento
    }))
    .then(function (response) {
      if (response.data == "sucess"){
        Swal.fire({
          title: 'Salvo com Sucesso',
          text: "Boa consulta e obrigado por usar a feegow",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'ok'
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        })
      }else{
        Swal.fire({
          title: 'Falha ao enviar Dados',
          text: response.data,
          icon: 'warning',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'ok'
        }).then((result) => {
          if (result.isConfirmed) {
            //location.reload();
          }
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  });
}