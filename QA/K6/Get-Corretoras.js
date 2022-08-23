import http from "k6/http";
import { check, sleep } from "k6";
import { Counter } from "k6/metrics";

let ErrorCount = new Counter("errors");

export const options = {
	vus: 10,
	duration: "15s",
	thresholds: {
		//errors: ["count<10"]
	}
};

export default function(){

	let res = http.get('https://apiceluladigitalhm.qualicorp.com.br/qvenda/corretoras/listaPorCorretor/45615836881?api-key=b2285418-3485-4dba-a0f3-7f79ce8f98a6');
	let success = check(res, {
		"status is 200": r => r.status == 200
	});
	if (!success) {
		ErrorCount.add(1)
	}

	sleep(2);

}