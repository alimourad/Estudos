import http from 'k6/http';
import { check, sleep } from "k6";
import { Counter } from "k6/metrics";

let ErrorCount = new Counter("Erros_");

export const options = {
	vus: 10,
	duration: "5s",
	// thresholds: {
	// 	//errors: ["count<10"]
	// }
};

export default function () {
    const url = 'https://apiceluladigitalhm.qualicorp.com.br/qvenda/corretores/login?api-key=54d7a776-fa6f-4893-9d47-21359e087d2a';
    const payload = JSON.stringify({
        email: 'amourad',
        senha: '+GGkg6P456',
        sistema: 'TamoJunto',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    };

    let res = http.post(url, payload, params);
    let success = check(res, {
		"status is 200": r => r.status == 200
	});
    if (!success) {
		ErrorCount.add(1)
	}

    sleep(2);

}