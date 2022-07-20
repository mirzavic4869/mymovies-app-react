// fungsi dari file action ini adalah untuk melakukan sebuah aksi yang akan dijalankan oleh redux

// aksi dinamis
export function reduxAction(type, payload) {
    return { type, payload}
}

// aksi statis
export const startLoading = {
    type: "START LOADING",
    payload: true,
}

export const stopLoading = {
    type: "STOP_LOADING",
    payload: false
}