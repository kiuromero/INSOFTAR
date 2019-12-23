//CREAR UNA INTERFAZ PARA ENTREGAR LOS DATOS AL SERVICIO
export interface User{
    id?: number;
    nombres?: string;
    apellidos?: string;
    cedula?: string;
    email?:string;
    telefono?: string;
    create_at?: Date;
    update_at?:Date;
}