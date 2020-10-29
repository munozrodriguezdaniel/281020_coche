import { Coche } from './models/coche'
import { menu, menu2 } from './view/menu'
import { leerTeclado } from './view/lecturaTeclado'

const main = async() => {
    let coches: Array<Coche> = new Array()
    let n: number 
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Introduzca los datos del coche')
                let matricula:string , consumo:number, velocidad:number, arrancar:string, arrancado: boolean, combustible:number
                matricula = await leerTeclado('Introduzca la matrícula del coche (NNNNXXX)')
                consumo = parseInt( await leerTeclado('Introduzca el consumo cada 100KM del vehículo'))
                arrancar = await leerTeclado('Introduzca si esta arrancado (Y) o esta parado (N)')
                combustible = parseInt( await leerTeclado('Introduzca la cantidad de combustible que tiene el vehículo'))
                if (arrancar == "Y"){
                    arrancado = true
                    velocidad = parseInt( await leerTeclado('Introduzca la velocidad del vehículo'))
                } else {
                    arrancado = false
                    velocidad = 0
                }
                let c1 = new Coche(matricula, consumo, velocidad, arrancado, combustible)
                coches.push(c1)
                break
            case 2:
                if (coches.length==0){
                    console.log('Aun no se ha creado ningun coche')
                } else {
                    console.log('Mostando los coches creados')
                    coches.forEach(Coche => {
                        console.log(`${Coche.mostrarCoche()}`)
                    });
                }
                break
            case 3:
                if (coches.length==0){
                    console.log('No existen coches creados')
                } else {
                    let matricula1:string
                    console.log('Elija usted la matrícula de un coche')
                    coches.forEach(Coche => {
                        console.log(`${Coche.mostrarCoche()}`)
                    });
                    matricula1=await leerTeclado('Introduzca la matrícula del coche')
                    let index=-1
                    coches.forEach(Coche => {
                        if(Coche.matricula==matricula1){
                           index=coches.indexOf(Coche)
                        }
                    });
                    if(index!=-1){
                        let n2:number
                        let coche_eleg=coches[index]
                        do {
                            n2 = await menu2()
                            switch(n2){
                                case 1:
                                    console.log('Este es el coche que ha elegido')
                                    console.log(coche_eleg.mostrarCoche())
                                    break
                                case 2:
                                    if(coche_eleg.arrancado){
                                        try {
                                            coche_eleg.arrancar()
                                            console.log('Coche apagado')
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    }else{
                                        console.log('Coche arrancado')
                                        coche_eleg.arrancar()
                                    }
                                    break
                                case 3:
                                    let vel_nueva:number
                                    vel_nueva=parseInt(await leerTeclado("Introduzca la nueva velocidad del vehículo"))
                                    try {
                                        coche_eleg.velocidad=vel_nueva 
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4:
                                    let comb_nuevo:number
                                    comb_nuevo=parseInt(await leerTeclado("Introduzca la cantidad de combustible que le ha añadido al vehículo"))
                                    try {
                                        coche_eleg.combustible2=comb_nuevo
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 5:
                                    let horas:number
                                    try {
                                        horas=parseInt(await leerTeclado("Introduzca el tiempo en horas que lleva el vehículo a la velocidad actual"))
                                        console.log(`El coche ha consumido ${coche_eleg.consumo2(horas)} litros`)
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 0:
                                    console.log('\n-Volviendo al menu anterior--')
                                    break
                                default:
                                    console.log("Opción incorrecta")
                                    break
                            }
                        } while (n2!=0);
                    } else{
                        console.log('Este coche no existe')
                    }
                }
                break
            case 0:
                console.log('\n--ADIÓS--')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    } while (n!=0);
}

main()