import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { authPayloadDto } from './Dto/authDto';

const fakeUser = [
    {
        id: 1,
        username: 'antenhe',
        password: 'password', // Consistent property name
    },
    {
        id: 2,
        username: 'melaka',
        password: '12345', // Consistent property name
    }
];

@Injectable()
export class AuthService {
    constructor(private readonly jwtservice:JwtService){}
    async validateUser({username,password}:authPayloadDto){
       
        const fakeuser=fakeUser.find((user)=>user.username===username);
        if(!fakeuser){
            throw new UnauthorizedException(' ====incorrect username====');
        }
        if(password!=fakeuser.password){
            throw new UnauthorizedException('====incorrect password====');
        }
        const { password:_,...user } = fakeuser;
        return this.jwtservice.sign(user);

    }
}

