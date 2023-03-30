import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpresponse = sut.handle(httpRequest)
    expect(httpresponse.statusCode).toBe(400)
    expect(httpresponse.body).toEqual(new MissingParamError('name'))
  })

  test('should return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpresponse = sut.handle(httpRequest)
    expect(httpresponse.statusCode).toBe(400)
    expect(httpresponse.body).toEqual(new MissingParamError('email'))
  })
})
