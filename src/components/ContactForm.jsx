import React, { useState } from "react";
import Section from "./Section";
import { Gradient } from "./design/Roadmap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    region: "",
    position: "",
    department: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "Nome é obrigatório";
    if (!formData.lastName) newErrors.lastName = "Sobrenome é obrigatório";
    if (!formData.email) newErrors.email = "E-mail é obrigatório";
    if (!formData.phone) newErrors.phone = "Telefone é obrigatório";
    if (!formData.company) newErrors.company = "Nome da empresa é obrigatório";
    if (!formData.region) newErrors.region = "País/Região é obrigatório";
    if (!formData.position) newErrors.position = "Cargo é obrigatório";
    if (!formData.department)
      newErrors.department = "Departamento é obrigatório";
    if (!formData.consent) newErrors.consent = "Consentimento é obrigatório";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Formulário válido, prossiga com o envio
      console.log("Formulário enviado com sucesso:", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Section className="py-10 bg-n-8 text-n-4" id="ContactForm">
      <div className="container mx-auto">
        <h2 className="text-center mb-8">Consulte nossos especialistas</h2>
        <p className="text-center mb-12">
          Através de nosso portfólio otimizado de ferramentas, B1soft é
          comprovadamente a maneira mais rápida, econômica e segura de otimizar
          seu BusinessOne.
        </p>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              className="block mb-2 text-sm font-bold text-n-4"
              htmlFor="firstName"
            >
              Nome*
            </label>
            <input
              className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-n-6"
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Nome"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-n-4"
              htmlFor="lastName"
            >
              Sobrenome*
            </label>
            <input
              className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-n-6"
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Sobrenome"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">{errors.lastName}</p>
            )}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-n-4"
              htmlFor="email"
            >
              E-mail Corporativo*
            </label>
            <input
              className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-n-6"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-n-4"
              htmlFor="phone"
            >
              Telefone*
            </label>
            <input
              className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-n-6"
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefone"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">{errors.phone}</p>
            )}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-n-4"
              htmlFor="company"
            >
              Nome da empresa*
            </label>
            <input
              className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-n-6"
              id="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nome da empresa"
            />
            {errors.company && (
              <p className="text-red-500 text-xs italic">{errors.company}</p>
            )}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-n-4"
              htmlFor="region"
            >
              País/Região*
            </label>
            <input
              className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-n-6"
              id="region"
              type="text"
              value={formData.region}
              onChange={handleChange}
              placeholder="País/Região"
            />
            {errors.region && (
              <p className="text-red-500 text-xs italic">{errors.region}</p>
            )}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-n-4"
              htmlFor="position"
            >
              Cargo*
            </label>
            <input
              className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-n-6"
              id="position"
              type="text"
              value={formData.position}
              onChange={handleChange}
              placeholder="Cargo"
            />
            {errors.position && (
              <p className="text-red-500 text-xs italic">{errors.position}</p>
            )}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-n-4"
              htmlFor="department"
            >
              Departamento*
            </label>
            <input
              className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-n-6"
              id="department"
              type="text"
              value={formData.department}
              onChange={handleChange}
              placeholder="Departamento"
            />
            {errors.department && (
              <p className="text-red-500 text-xs italic">{errors.department}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <p className="text-sm mb-4 text-n-4">
              A B1Soft tem o compromisso de proteger e respeitar sua privacidade
              e nós usaremos suas informações pessoais serão utilizadas somente
              para administrar sua conta e fornecer os produtos e serviços que
              você solicitou. Ocasionalmente, a b1Soft gostaria de contatá-lo
              sobre produtos, serviços e também sobre outros assuntos que possam
              ser do seu interesse. Se você concorda em ser contatado com essa
              finalidade, marque abaixo para nos informar qual a forma de
              contato que você gostaria.
            </p>
            <label className="block text-n-4 font-bold">
              <input
                className="mr-2 leading-tight"
                id="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleChange}
              />
              <span className="text-sm">
                Eu concordo em receber outras comunicações da B1Soft.
              </span>
            </label>
            {errors.consent && (
              <p className="text-red-500 text-xs italic">{errors.consent}</p>
            )}
            <p className="text-sm mt-4 text-n-4">
              Você pode cancelar o recebimento dessas comunicações quando
              quiser. Para obter mais informações sobre esse cancelamento,
              nossas de privacidade e nosso compromisso em proteger e respeitar
              sua privacidade, confira nossa{" "}
              <a
                href="#privacy-policy"
                className="text-blue-500 hover:underline"
              >
                Política de Privacidade
              </a>
              .
            </p>
            <p className="text-sm mt-4 text-n-4">
              Ao clicar em "enviar" abaixo, você concorda em permitir que a
              B1soft armazene e processe as informações pessoais enviadas acima
              para fornecer o conteúdo solicitado.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Gradient />
    </Section>
  );
};

export default ContactForm;
