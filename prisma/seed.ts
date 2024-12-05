import { PrismaClient } from '@prisma/client'

import { hashPassword } from '@/lib/services/auth'

import { initialUsers } from './seed-utils'

// Initialize Prisma Client
const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create users
  for (const userData of initialUsers) {
    const hashedPassword = await hashPassword(userData.password)

    await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: {
        email: userData.email,
        name: userData.name,
        password: hashedPassword,
        role: userData.role,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })
    console.log(`👤 Created user: ${userData.email} (${userData.role})`)
  }

  console.log('✨ Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during database seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    // Close database connection
    await prisma.$disconnect()
  })
