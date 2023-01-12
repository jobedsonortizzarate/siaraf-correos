// import { Inject, Injectable } from '@nestjs/common';
// import { CiudadDTO } from 'src/API/ciudad/ciudad.dto';
// import { CiudadEntity } from 'src/Domain/Ciudad/CiudadEntity';
// import { CiudadRepositoryInterface } from 'src/Domain/Ciudad/ciudad.repository.interface';
// import { CiudadMapper } from 'src/Utils/Mappers/ciudad.mapper';
// import { CiudadServiceInterface } from 'src/Domain/Ciudad/ciudad.service.interface';
// // import { CiudadServiceInterface } from '../../Domain/Ciudad/ciudad.service.interface';

// @Injectable()
// export class BaseService<T> implements CiudadServiceInterface {
//   constructor(
//     @Inject('CiudadRepositoryInterface')
//     private readonly repository: CiudadRepositoryInterface,
//     private mapper: CiudadMapper,
//   ) {}

//   public async create(ciudadDto: CiudadDTO): Promise<CiudadEntity> {
//     const ciudad = this.mapper.dtoToEntity(ciudadDto);
//     return await this.repository.create(ciudad);
//   }
//   async getCiudadById(id: string): Promise<CiudadDTO> {
//     const ciudad: CiudadEntity = await this.ciudadRepository.getCiudadById(id);
//     return this.mapper.entityToDto(ciudad);
//   }

//   async newCiudad(ciudadDTO: CiudadDTO): Promise<CiudadDTO> {
//     const newCiudad: CiudadEntity = await this.ciudadRepository.newCiudad(
//       ciudadDTO,
//     );
//     return this.mapper.entityToDto(newCiudad);
//   }

//   async updateCiudad(id: string, ciudadDTO: CiudadDTO): Promise<CiudadDTO> {
//     const updateCiudad = await this.ciudadRepository.updateCiudad(
//       id,
//       ciudadDTO,
//     );
//     return this.mapper.entityToDto(updateCiudad);
//   }

//   async deleteCiudad(id: string): Promise<void> {
//     await this.ciudadRepository.deleteCiudad(id);
//   }
// }

// // import { Inject, Injectable } from '@nestjs/common';
// // import { CiudadDTO } from 'src/dtos/ciudad.dto';
// // import { CiudadEntity } from 'src/entities/ciudad.entity';
// // import { CiudadRepositoryInterface } from 'src/interfaces/ciudad.repository.interface';
// // import { CiudadMapper } from 'src/mappers/ciudad.mapper';

// // @Injectable()
// // export class CiudadService {
// //   constructor(
// //     @Inject('CiudadRepositoryInterface')
// //     private readonly userRepository: CiudadRepositoryInterface,
// //     private mapper: CiudadMapper,
// //   ) {}

// //   public async create(ciudadDto: CiudadDTO): Promise<CiudadEntity> {
// //     const ciudad = this.mapper.dtoToEntity(ciudadDto);
// //     return this.userRepository.create(ciudad);
// //   }
// // }

// // import { Injectable } from '@nestjs/common';
// // import { InjectRepository } from '@nestjs/typeorm';
// // import { CiudadDTO } from '../dtos/ciudad.dto';
// // import { CiudadMapper } from '../mappers/ciudad.mapper';
// // import { CiudadesRepository } from './ciudad.repository';
// // import { Repository } from 'typeorm';

// // @Injectable()
// // export class CiudadesService {
// //   constructor(
// //     @InjectRepository(CiudadEntity)
// //     private ciudadRepository: Repository<CiudadEntity>,
// //     private mapper: CiudadMapper,
// //   ) {}

// //   async getAllCiudades(): Promise<CiudadDTO[]> {
// //     const ciudad: CiudadEntity[] =
// //       // await this.ciudadRepository.getAllCiudades();
// //       await this.ciudadRepository.find();
// //     return ciudad.map((ciudad) => this.mapper.entityToDto(ciudad));
// //   }

// //   async getCiudadById(id: string): Promise<CiudadDTO> {
// //     const ciudad: CiudadEntity = await this.ciudadRepository.getCiudadById(
// //       id,
// //     );
// //     return this.mapper.entityToDto(ciudad);
// //   }

// //   async newCiudad(ciudadDTO: CiudadDTO): Promise<CiudadDTO> {
// //     const newCiudad: CiudadEntity = await this.ciudadRepository.newCiudad(
// //       ciudadDTO,
// //     );
// //     return this.mapper.entityToDto(newCiudad);
// //   }

// //   async updateCiudad(id: string, ciudadDTO: CiudadDTO): Promise<CiudadDTO> {
// //     const updateCiudad = await this.ciudadRepository.updateCiudad(
// //       id,
// //       ciudadDTO,
// //     );
// //     return this.mapper.entityToDto(updateCiudad);
// //   }

// //   async deleteCiudad(id: string): Promise<void> {
// //     await this.ciudadRepository.deleteCiudad(id);
// //   }
// // }
