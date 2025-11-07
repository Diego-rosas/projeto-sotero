var quantidadeContas = 0;
var valTotal = 0;
var valorLanche = 0;
var respostaDescricao = "";
var respostaValor = "";

function registrarContasMensais() {

  const salariomensal = 2500.00

  var inDescricao = document.getElementById("inDescricao").value;
  var inValor = Number(document.getElementById("inValor").value);
  var outListarContas = document.getElementById("outListarContas");

  var OutListarValor = document.getElementById("outListarValor")

  var outTotal = document.getElementById("outValorTotal");
  var salarioMensal = Number(document.getElementById("inSalario").value);

  if (inDescricao == "" || inDescricao <= 0 && inDescricao >= 9 || inValor == 0 || isNaN(inValor)) {
   alert("Informe os dados corretamente");
    inDescricao.focus();
    return;
  }

  
  quantidadeContas = quantidadeContas + 1;
  valTotal = valTotal + inValor ;
  respostaDescricao = respostaDescricao + inDescricao + "\n";
  respostaValor = respostaValor + "R$ " + inValor.toFixed(2) + "\n" ;

  recursosRestante =  (salarioMensal - valTotal)

 
  if(valTotal >= (salarioMensal*30)/100){
    outSalario.textContent = ("Recursos restantes R$ " + recursosRestante.toFixed(2));
    outSalario.style.color = "red";
  }else {
    outSalario.textContent = ("Recursos restantes R$ " + recursosRestante.toFixed(2));
    outSalario.style.color = "blue";
  }

  outTotal.textContent =  quantidadeContas + " Conta (s) - Total R$: " + valTotal.toFixed(2);


  var elemento = document.getElementById("outListarValor");
  elemento.innerHTML += inDescricao + ' - ' + inValor + '\n';
  

  document.getElementById('inDescricao').value = "";
  document.getElementById('inValor').value = "";
  document.getElementById('inDescricao').focus();


 


  
  outListarContas.textContent = respostaDescricao + "_____________________"+ "\n";
  OutListarValor.textContent = respostaValor

  
  

 

        document.getElementById('inDescricao').value = "";
        document.getElementById('inValor').value = "";
        document.getElementById('inDescricao').focus();

}

btRegistrarConta = document.getElementById('btRegistrarConta')
btRegistrarConta.addEventListener('click', registrarContasMensais);
