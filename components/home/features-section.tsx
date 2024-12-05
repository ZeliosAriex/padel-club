const FeaturesSection = () => {
  const features = [
    {
      title: 'Reserva Fácil',
      description:
        'Reserva tu pista en segundos. Elige tu hora y pista preferida con nuestro intuitivo sistema de reservas.',
    },
    {
      title: 'Gestiona Reservas',
      description:
        'Consulta y gestiona tus próximas reservas. Cancela o modifica las reservas fácilmente.',
    },
    {
      title: 'Disponibilidad de Pistas',
      description:
        'Consulta la disponibilidad de pistas en tiempo real. Encuentra el horario perfecto para tu partida.',
    },
  ]

  return (
    <section className='bg-background/5 py-16 md:py-24 lg:py-32'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='bg-background p-8 rounded-lg shadow-sm'>
              <h2 className='text-2xl font-semibold text-foreground mb-4'>
                {feature.title}
              </h2>
              <p className='text-foreground/80'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
