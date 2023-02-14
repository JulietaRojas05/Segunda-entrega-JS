
const contraAutorizada = 12345;

for(let i = 0; i < 100 ; i++) {

        let contraIngresada = parseInt(prompt("Ingrese 12345 para iniciar esta calculadora"));

                if(contraIngresada === contraAutorizada) {

                console.log("Proceda!");

                break;

                }else {

                passwordUsuario = parseInt(alert("Solo tenias un trabajo :( ")); 

                }
}

Bienvenidos();

function Bienvenidos() {

                alert("Bienvenido! Esta es una calculadora para que usted sepa cuantos gramos de hongos secos puede comer segun su peso");

}

        let dosis = prompt("Para ingresar a la calculadora ingrese dosisbaja, dosismedia o dosisalta");

        let peso = parseInt(prompt("Ingrese su peso: "));

        while(isNaN(peso)){

        alert("Ingresá un valor correcto")

        peso = parseInt(prompt("Ingresá tu peso (VALOR CORRECTO PLS)"));

}

        class Multi {
                constructor(pesoPersona){
                        this.pesoPersona = pesoPersona;
                }

                multiBajo () {

                        return this.pesoPersona * 11;
                
                }

                multiMedio () {

                        return this.pesoPersona * 3;
                
                }

                multiAlto () {

                        return this.pesoPersona * 6;
                
                }
        }

        const pesoTotal = new Multi(peso);


                switch(dosis) {

                case "dosisbaja":

                        console.log("Felicidades! La cantidad hongos secos en gramos que puedes consumir en una dosis baja es " + (pesoTotal.multiBajo / 1000) ) ;

                        break
                
                case "dosismedia":

                        console.log("Felicidades! La cantidad hongos secos en gramos que puedes consumir en una dosis media es " + (pesoTotal.multiMedio / 100)) ;

                        break 
                
                case "dosisalta":

                        console.log("Felicidades! La cantidad hongos secos en gramos que puedes consumir en una dosis baja es " + (pesoTotal.multiAlto / 100)) ;

                        break   
                
                default: 
                        
                        console.log("No elegiste ninguna opcion ¿Acaso no quieres viajar? :( ");

                        break;
}

const arrayPrecauciones = [ "Si se produce una sobredosis o sobreingesta de este tipo de hongos lo más recomendable es ir al centro de salud más cercano, su toxicidad no llega a ser venenosa ni mortal, pero puede producir sobreexcitación, nerviosismo e irritabilidad.", "También se recomienda consumirlo, como en todas las sustancias que producen alteraciones de la percepción y de la conciencia, acompañado por una persona de confianza", "y en muchos casos es necesario una introducción al tema de los hongos por parte de algún entendido o un libro, para habituar la mente, porque puede producir ataques de pánico al no poder controlar lo que está sucediendo."];

for (let i = 0; i < arrayPrecauciones.lenght; i++) {

        alert(arrayPrecauciones[i]);

        }



