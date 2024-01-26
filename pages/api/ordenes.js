import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // Crear Ordenes
  if (req.method === "POST") {
    try {
      const orden = await prisma.orden.create({
        data: {
          nombre: req.body.nombre,
          total: req.body.total,
          pedido: req.body.pedido,
          fecha: req.body.fecha,
        },
      });
      res.status(200).json(orden);
    } catch (error) {
      console.error("Error al crear la orden:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  } else {
    // Obtener órdenes
    const ordenes = await prisma.orden.findMany({
      where: {
        estado: false,
      },
    });
    res.status(200).json(ordenes);
  }

  await prisma.$disconnect();
}
