let codigo="00020101021226790014br.gov.bcb.pix2557qrcode.mwbank.com.br/cob/2a0f8edc60384cbfa5193570b8c58bfa5204000053039865802BR5921P D S TECHNOLOGY LTDA6009SAO PAULO62070503***630493A5";

async function carregar(){
    let r=await fetch("dados.json");
    let d=await r.json();

    pedido.innerText=d.pedido;
    vendido.innerText=d.vendido;
    produto.innerText=d.produto;
    subtotal.innerText="R$ "+d.valor;
    total.innerText="R$ "+d.valor;

    codigo=d.pix;

    qrCode.src="https://quickchart.io/qr?size=180&text="+encodeURIComponent(codigo);
}

function copiarPix(){
    navigator.clipboard.writeText(codigo);

    let botao=document.getElementById("botaoPix");

    botao.classList.add("copiado");
    botao.innerText="Código copiado";

    setTimeout(()=>{
        botao.classList.remove("copiado");
        botao.innerText="Copiar Código Pix";
    },2000);
}

function finalizar(){
    window.location.href="https://wa.me/";
}

let t=3600;
setInterval(()=>{
    let m=Math.floor(t/60);
    let s=t%60;

    contador.innerText=`${m}m ${s}s`;
    barraTempo.style.width=(t/3600)*100+"%";

    t--;
},1000);

carregar();