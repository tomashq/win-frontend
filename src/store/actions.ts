import type { NetworkInfo, CryptoAsset } from '@windingtree/win-commons/dist/types';
import type { BookingsAuthResponse } from '@windingtree/glider-types/dist/win';
import type {
  Web3ModalProvider,
  Web3ModalSignInFunction,
  Web3ModalSignOutFunction
} from '../hooks/useWeb3Modal';
import type { CheckOut, GroupCheckOut, GenericStateRecord, SearchParams } from './types';

export interface SetConnectingAction {
  type: 'SET_CONNECTING';
  payload: boolean;
}

export interface SetProviderAction {
  type: 'SET_PROVIDER';
  payload?: Web3ModalProvider;
}

export interface SetWeb3ModalSignInAction {
  type: 'SET_WEB3MODAL_SIGN_IN';
  payload?: Web3ModalSignInFunction;
}

export interface SetWeb3ModalSignOutAction {
  type: 'SET_WEB3MODAL_SIGN_OUT';
  payload?: Web3ModalSignOutFunction;
}

export interface SetAccountAction {
  type: 'SET_ACCOUNT';
  payload?: string;
}

export interface SetRecordAction {
  type: 'SET_RECORD';
  payload: {
    name: string;
    record: GenericStateRecord;
  };
}

export interface RemoveRecordAction {
  type: 'REMOVE_RECORD';
  payload: {
    name: string;
    id: string;
  };
}

export interface ResetRecordAction {
  type: 'RESET_RECORD';
  payload: {
    name: string;
  };
}

export interface SetAuthenticationTokenAction {
  type: 'SET_AUTHENTICATION_TOKEN';
  payload: {
    token?: string;
    timestamp: number;
  };
}

export interface SetCheckOutAction {
  type: 'SET_CHECKOUT';
  payload: CheckOut;
}

export interface SetGroupCheckOutAction {
  type: 'SET_GROUP_CHECKOUT';
  payload: GroupCheckOut;
}

export interface SetSelectedNetwork {
  type: 'SET_SELECTED_NETWORK';
  payload: NetworkInfo;
}

export interface SetSelectedAsset {
  type: 'SET_SELECTED_ASSET';
  payload: CryptoAsset;
}

export interface SetSearchParams {
  type: 'SET_SEARCH_PARAMS';
  payload: SearchParams;
}

export interface SetSelectedFacilityId {
  type: 'SET_SELECTED_FACILITY_ID';
  payload: string;
}

export interface ResetSelectedFacilityId {
  type: 'RESET_SELECTED_FACILITY_ID';
  payload?: undefined;
}

export interface SetWalletAuthAction {
  type: 'SET_WALLET_AUTH';
  payload?: BookingsAuthResponse;
}

export type Action =
  | SetSearchParams
  | SetCheckOutAction
  | SetGroupCheckOutAction
  | SetAuthenticationTokenAction
  | SetConnectingAction
  | SetProviderAction
  | SetWeb3ModalSignInAction
  | SetWeb3ModalSignOutAction
  | SetAccountAction
  | SetSelectedNetwork
  | SetSelectedAsset
  | SetWalletAuthAction
  | SetRecordAction
  | RemoveRecordAction
  | ResetRecordAction
  | SetSelectedFacilityId
  | ResetSelectedFacilityId;
