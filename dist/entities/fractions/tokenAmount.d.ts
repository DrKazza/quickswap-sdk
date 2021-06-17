import { BigintIsh } from '../../constants';
import { CurrencyAmount } from './currencyAmount';
import { Token } from '../token';
export declare class TokenAmount extends CurrencyAmount {
    readonly token: Token;
    constructor(token: Token, amount: BigintIsh);
    add(other: TokenAmount): TokenAmount;
    subtract(other: TokenAmount): TokenAmount;
}
