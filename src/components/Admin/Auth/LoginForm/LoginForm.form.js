import * as Yup from "yup";

export function initialValues(){
    return {
        email: "",
        password: ""
    };
}


export function validationSchema(){
    return Yup.object({
        email: Yup.string()
        .email("El email no es valido")
        .required("campo requerido"),
        password:Yup.string().required("campo obligatorio"),
    });
}