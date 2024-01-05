import { CPF } from "./classGenerator";

const getCpf = function () {
  let validCPF = false;
  while (!validCPF) {
    const cpf = new CPF(
      String(Math.floor(Math.random() * 90000000000 + 10000000000))
    );

    if (cpf.validCPF()) {
      return cpf.cleanCPF;
    }
  }
};

export const generateCpf = () => getCpf();
export const formatCpf = (cpf) => CPF.formatCPF(cpf);
