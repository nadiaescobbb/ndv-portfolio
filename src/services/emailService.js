export const sendEmailWeb3Forms = async (formData) => {

  const data = new FormData();

  data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
  

  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("subject", formData.subject);
  data.append("message", formData.message);
  
 
  if (formData.phone) {
    data.append("phone", formData.phone);
  }

  
  data.append("from_name", "Portfolio - Formulario de Contacto");
  data.append("replyto", formData.email);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: data
  });

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message || 'Error al enviar el mensaje');
  }

  return result;
};

export const sendEmail = sendEmailWeb3Forms;