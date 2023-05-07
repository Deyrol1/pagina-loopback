
import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Postear} from '../models';
import {PostearRepository} from '../repositories';
@authenticate('jwt')
export class PoztController {
  constructor(
    @repository(PostearRepository)
    public postearRepository : PostearRepository,
  ) {}

  @post('/postears')
  @response(200, {
    description: 'Postear model instance',
    content: {'application/json': {schema: getModelSchemaRef(Postear)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Postear, {
            title: 'NewPostear',
            exclude: ['id'],
          }),
        },
      },
    })
    postear: Omit<Postear, 'id'>,
  ): Promise<Postear> {
    return this.postearRepository.create(postear);
  }

  @get('/postears/count')
  @response(200, {
    description: 'Postear model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Postear) where?: Where<Postear>,
  ): Promise<Count> {
    return this.postearRepository.count(where);
  }

  @get('/postears')
  @response(200, {
    description: 'Array of Postear model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Postear, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Postear) filter?: Filter<Postear>,
  ): Promise<Postear[]> {
    return this.postearRepository.find(filter);
  }

  @patch('/postears')
  @response(200, {
    description: 'Postear PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Postear, {partial: true}),
        },
      },
    })
    postear: Postear,
    @param.where(Postear) where?: Where<Postear>,
  ): Promise<Count> {
    return this.postearRepository.updateAll(postear, where);
  }

  @get('/postears/{id}')
  @response(200, {
    description: 'Postear model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Postear, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Postear, {exclude: 'where'}) filter?: FilterExcludingWhere<Postear>
  ): Promise<Postear> {
    return this.postearRepository.findById(id, filter);
  }

  @patch('/postears/{id}')
  @response(204, {
    description: 'Postear PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Postear, {partial: true}),
        },
      },
    })
    postear: Postear,
  ): Promise<void> {
    await this.postearRepository.updateById(id, postear);
  }

  @put('/postears/{id}')
  @response(204, {
    description: 'Postear PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() postear: Postear,
  ): Promise<void> {
    await this.postearRepository.replaceById(id, postear);
  }

  @del('/postears/{id}')
  @response(204, {
    description: 'Postear DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.postearRepository.deleteById(id);
  }
}
