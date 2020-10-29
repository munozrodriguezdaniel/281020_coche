export class Coche {
    private _matricula : string
    private _consumo : number 
    private _arrancado : boolean
    private _velocidad : number
    private _combustible: number

    constructor (matricula:string, consumo:number, velocidad:number, arrancado:boolean, combustible:number){
        this._matricula = matricula
        this._consumo = consumo
        this._arrancado = arrancado
        this._velocidad = velocidad
        this._combustible = combustible

    }

    get matricula(){
        return this._matricula
    }

    get consumo(){
        return this._consumo
    }

    get arrancado(){
        return this._arrancado
    }

    get velocidad(){
        return this._velocidad
    }

    get combustible(){
        return this._combustible
    }

    mostrarCoche(){
        return `El coche con matricula ${this._matricula} va a ${this._velocidad} km/h, consume ${this._consumo} L cada 100 km y tiene ${this._combustible} L de combustible`
    }

    arrancar(){
        if(this._arrancado==false){
            this._arrancado=true
        }else{
            if (this._velocidad!=0){
                throw 'ERROR no se puede apagar el coche si está el coche en marcha'
            } else {
                this._arrancado=false
            }
        }
    }

    set velocidad(vel_nueva:number){
        if(this._arrancado==false){
            throw 'ERROR no se puede cambiar la velocidad a un coche que no está arrancado'
        } else {
            this._velocidad=vel_nueva
        }
    }

    consumo2(horas:number){ 
        if(this._arrancado ==  false || this._velocidad==0){
            throw 'ERROR, no se puede calcular el consumo de un coche que no esta arrancado o esta parado'
        } else {
            return (this._velocidad/horas)*(this._consumo/100)
        }
    }

    set combustible2(comb_nuevo:number){
        if(this._arrancado==true){
            throw 'ERROR no se puede repostar con el coche arrancado'
        } else {
            this._combustible=this._combustible+comb_nuevo
        }
    }
}
