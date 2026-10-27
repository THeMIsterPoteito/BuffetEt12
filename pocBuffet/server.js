const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('.')); // Sirve el index.html automáticamente

// Endpoint único de prueba
app.post('/api/pedidos', (req, res) => {
  const { alumno, items } = req.body;

  // Validar hipótesis de datos
  if (!alumno || !items) {
    return res.status(400).json({ status: 400, mensaje: "Trama JSON incompleta" });
  }

  // Generar código de retiro único
  const codigoRetiro = `BE-${Math.floor(1000 + Math.random() * 9000)}`;

  // Responder JSON en tiempo real
  res.status(200).json({
    status: 200,
    mensaje: "Pedido procesado exitosamente en PoC",
    codigo_retiro: codigoRetiro,
    tiempo_estimado: "10:15 AM"
  });
});

app.listen(3000, () => console.log('🚀 PoC corriendo en http://localhost:3000'));