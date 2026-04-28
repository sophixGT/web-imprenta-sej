const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar el formulario de contacto (simulación)
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Mensaje recibido de ${name} (${email}): ${message}`);
    res.status(200).json({ success: true, message: '¡Gracias por contactarnos! Te responderemos pronto.' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor de Imprenta SEJ corriendo en http://localhost:${PORT}`);
});
