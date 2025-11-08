import { basename, extname, resolve } from 'node:path'
import fs from 'fs-extra'
import type { Db } from './Db.js'
import type { Seed } from './Seed.js'

class Seeder {
  private readonly db: Db

  private readonly directory: string

  private readonly extension: string

  private readonly onApply?: (name: string) => void

  public constructor(params: {
    db: Db,
    directory: string,
    extension: string,
    onApply?: (name: string) => void,
  }) {
    this.db = params.db
    this.directory = params.directory
    this.extension = params.extension
    this.onApply = params.onApply
  }

  public list(): string[] {
    return fs.readdirSync(this.directory).map((filename) => {
      return basename(filename, extname(filename))
    })
  }

  public async apply(name: string): Promise<void> {
    this.onApply?.(name)
    const file = resolve(this.directory, `${name}.${this.extension}`)
    const { seed }: { seed: Seed } = await import(file)
    await seed(this.db)
  }
}

export {
  Seeder,
}
