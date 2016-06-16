    var actualizarHora = function(){
      // Variables para obtener la fecha real
        var hora = new Date();
        var horas = hora.getHours();
        var ampm;
        var minutos = hora.getMinutes();
        var segundos = hora.getSeconds();
      // Variables para escribir en el documento
      var pHoras = document.getElementById('horas');
      var pMinutos = document.getElementById('minutos');
      var pSegundos = document.getElementById('segundos');
      var pAMPM = document.getElementById('ampm');
        
      pHoras.textContent = horas;
      pAMPM.textContent = ampm;
      // Para que aparezce un 0 delante del minuto
      if (minutos < 10) {
        minutos = "0" + minutos;
      }
      pMinutos.textContent = minutos;
      // Para que aparezce un 0 delante del segundos
      if (segundos < 10) {
        segundos = "0" + segundos;
      }
      pSegundos.textContent = segundos;
    };

    var mostrarFecha = function(){
        var fecha = new Date();
        var diaSemana = fecha.getDay();
        var dia = fecha.getDate();
        var mes = fecha.getMonth();
        var year = fecha.getFullYear();


      var pDiaSemana  = document.getElementById('diaSemana');
      var pDia = document.getElementById('dia');
      var pMes = document.getElementById('mes');
      var pYear = document.getElementById('year');
      // Array con la posicion de los dias
      var semana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
      //Array con la posicion de los meses
      var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];


      // Asignacion de valores a las variables
      pDiaSemana.textContent = semana[diaSemana];
      pDia.textContent = dia;
      pMes.textContent = meses[mes];
      pYear.textContent = year;
    };
    

// ------------------------------------------------Progreso general --------------------------------------
    actualizarHora();
    mostrarFecha();
    // Funcion que va a recibir dos parametros, el primero la funcion que va a
    // realizar y el segundo la frecuencia (milisegundos)
    var intervalo = setInterval(actualizarHora, 1000);

