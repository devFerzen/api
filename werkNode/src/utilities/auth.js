import jwt from 'jsonwebtoken';
import werkModels from '../graphql/mdbModels';
import { SEGURO_AUTH_TOKEN, SEGURO_REFRESH_TOKEN}  from './constants';

module.exports = function (user = werkModels.User) {
  const authToken = jwt.sign(
    { usuarioId: user._id },
    SEGURO_AUTH_TOKEN,
    { expiresIn: '15s'},
  );
  const refreshToken = jwt.sign(
    { usuarioId: user._id,
      token_count: user.token_count },
    SEGURO_REFRESH_TOKEN,
    { expiresIn: '5d'},
  );

  return {authToken, refreshToken}
};
