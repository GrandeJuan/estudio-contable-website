import { useState, useEffect } from 'react';
import { FaTimes, FaWhatsapp, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { contenido } from '../data/contenido';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONFIGURACIÓN DE EMAILJS
// Completá estos datos con tu cuenta de emailjs.com
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const EMAILJS_SERVICE_ID = 'TU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY';

const motivosConsulta = [
  'Contabilidad general',
  'Liquidación de impuestos',
  'Liquidación de sueldos',
  'Asesoría impositiva',
  'Constitución de sociedades',
  'Auditoría',
  'Otra consulta',
];

const ConsultaModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: '',
    mensaje: '',
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  // Cerrar con Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.motivo || !formData.mensaje) {
      setError('Por favor completá todos los campos obligatorios.');
      return;
    }

    setEnviando(true);
    setError('');

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.nombre,
            from_email: formData.email,
            telefono: formData.telefono || 'No proporcionado',
            motivo: formData.motivo,
            mensaje: formData.mensaje,
          },
        }),
      });
      if (!res.ok) throw new Error('Error al enviar');
      setEnviado(true);
    } catch {
      setError('Hubo un error al enviar. Podés intentar de nuevo o escribirnos por email.');
    } finally {
      setEnviando(false);
    }
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(`Consulta: ${formData.motivo || 'General'}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono || '-'}\nMotivo: ${formData.motivo}\n\n${formData.mensaje}`
    );
    window.open(`mailto:${contenido.estudio.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const resetForm = () => {
    setFormData({ nombre: '', email: '', telefono: '', motivo: '', mensaje: '' });
    setEnviado(false);
    setError('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2C3E65] to-[#1a2a4a] text-white p-6 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
          <h2 className="text-2xl font-bold">Hacenos tu consulta</h2>
          <p className="text-gray-300 mt-1 text-sm">
            Completá el formulario y te respondemos a la brevedad.
          </p>
        </div>

        {/* Contenido */}
        <div className="p-6">
          {enviado ? (
            /* Estado de éxito */
            <div className="text-center py-8">
              <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#2C3E65] mb-2">
                Consulta enviada
              </h3>
              <p className="text-gray-600 mb-6">
                Recibimos tu mensaje. Te vamos a responder lo antes posible.
              </p>
              <button
                onClick={handleClose}
                className="bg-cta hover:bg-cta-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>
          ) : (
            /* Formulario */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold text-[#2C3E65] mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cta focus:outline-none transition-colors text-gray-800"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#2C3E65] mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cta focus:outline-none transition-colors text-gray-800"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-semibold text-[#2C3E65] mb-1">
                  Teléfono <span className="text-gray-400 font-normal">(opcional)</span>
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+54 11 1234-5678"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cta focus:outline-none transition-colors text-gray-800"
                />
              </div>

              {/* Motivo */}
              <div>
                <label className="block text-sm font-semibold text-[#2C3E65] mb-1">
                  Motivo de consulta *
                </label>
                <select
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cta focus:outline-none transition-colors text-gray-800 bg-white"
                >
                  <option value="">Seleccioná un motivo</option>
                  {motivosConsulta.map((motivo) => (
                    <option key={motivo} value={motivo}>
                      {motivo}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-semibold text-[#2C3E65] mb-1">
                  Tu consulta *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Contanos en qué podemos ayudarte..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cta focus:outline-none transition-colors resize-none text-gray-800"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={enviando}
                className="flex items-center justify-center space-x-2 bg-cta hover:bg-cta-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
                <span>{enviando ? 'Enviando...' : 'Enviar consulta'}</span>
              </button>

              {/* Separador */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-gray-400 text-sm">o si preferís</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Opciones alternativas */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={contenido.estudio.redesSociales.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleMailto}
                  className="flex items-center justify-center space-x-2 bg-[#2C3E65] hover:bg-[#1a2a4a] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  <FaEnvelope className="text-lg" />
                  <span>Email directo</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultaModal;
