import mockApi from '_api';
import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';

const USE_MOCKS = Boolean(process.env.REACT_APP_USE_MOCKS) || false;
