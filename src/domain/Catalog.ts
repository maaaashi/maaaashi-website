import { StaticImageData } from 'next/image'

export class Catalog {
  constructor(
    public title: string,
    public description: string,
    public link: string,
    public image: StaticImageData,
    public github?: string,
    public qiita?: string
  ) {}
}
