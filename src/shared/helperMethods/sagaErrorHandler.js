import { put } from 'redux-saga/effects';
import { SNACKBAR_OPEN } from 'store/actions';
import { useNavigate } from 'react-router-dom';

export function* sagaErrorHandler(error) {

    yield put({
        type: SNACKBAR_OPEN,
        open: true,
        message: error.message,
        variant: 'alert',
        alertSeverity: 'error',
        transition: 'SlideRight',
        anchorOrigin: { vertical: 'top', horizontal: 'right' }
    });

}
