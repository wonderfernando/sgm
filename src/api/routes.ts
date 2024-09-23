import { User } from "@/lib/utils";

export const BASE_URL = "localhost:3333";
export const APP_NAME = "SGM";
export const IMAGE_URL = "https://www.enanza.ao/storage/corporate/";
 
export const login = async (email:string, password:string) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};
 
export const saveLocalStorageToken = (token:string) => {
  window.localStorage.setItem(`${APP_NAME}_`, token);
};


// Função para obter todos os usuários
export const GET_USUARIOS = async () => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/usuarios`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return await response.json();
};

// Função para obter um usuário por ID
export const GET_USUARIO_BY_ID = async (id:string) => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/usuario/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return await response.json();
};

// Função para criar um novo usuário
export const POST_USUARIO = async (data:string) => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/usuario`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

// Função para atualizar um usuário existente
export const PUT_USUARIO = async (id:string, data:User) => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/usuario/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

// Função para deletar um usuário
export const DELETE_USUARIO = async (id:string) => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/usuario/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return await response.json();
};

// Funções correspondentes para Alertaroubo
export const GET_ALERTAS_ROUBO = async () => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/alertaroubos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return await response.json();
};

// Função para criar um novo alerta de roubo
export const POST_ALERTA_ROUBO = async (data: Alertaroubo) => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/alertaroubo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

// Função para obter todas as viaturas
export const GET_VIATURAS = async () => {
    const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
    const response = await fetch(`${BASE_URL}/viaturas`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    return await response.json();
  };
  
  // Função para obter uma viatura por ID
  export const GET_VIATURA_BY_ID = async (id:string) => {
    const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
    const response = await fetch(`${BASE_URL}/viatura/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    return await response.json();
  };
  
  // Função para criar uma nova viatura
  export const POST_VIATURA = async (data: Viatura) => {
    const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
    const response = await fetch(`${BASE_URL}/viatura`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };
  
  // Função para atualizar uma viatura existente
  export const PUT_VIATURA = async (id:string, data:Viatura) => {
    const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
    const response = await fetch(`${BASE_URL}/viatura/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };
  
  // Função para deletar uma viatura
  export const DELETE_VIATURA = async (id:string) => {
    const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
    const response = await fetch(`${BASE_URL}/viatura/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    return await response.json();
  };
  