const initialState = {
    mangXucXac: [
        {
            img: `./imgGame/1.png`,
            record: 1
        },
        {
            img: `./imgGame/2.png`,
            record: 2
        },
        {
            img: `./imgGame/3.png`,
            record: 3
        }
    ],
    
    soBanThang: 5,
    tongSoBanChoi: 3,
    banChon: false,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case 'PLAY_GAME':
            const xucXacArray = [];
            for (let index = 0; index < 3 ; index++) {
                const min = 1;
                const max = 7;
                const rand = Math.floor(min + Math.random() * (max - min));
                const img = `./imgGame/${rand}.png`;
                const object = {img, record: rand};
                if (rand === 6) {
                    console.log('Random object', object);
                }
                
                xucXacArray.push(object);
            }
            state.mangXucXac = xucXacArray;

            // tinh tong diem
            const tongDiem = state.mangXucXac.reduce((td, xx, index) => {
                return td += xx.record;
            }, 0);

            if ((state.banChon && tongDiem > 10) || (!state.banChon && tongDiem <= 10)) {
                state.soBanThang += 1;
            }

            state.tongSoBanChoi += 1;

            return {...state};
        case 'CHOOSE_STATE_XX':
            state.banChon = action.datCuoc;
            return {...state}
        default:
            return {...state}
    }
}