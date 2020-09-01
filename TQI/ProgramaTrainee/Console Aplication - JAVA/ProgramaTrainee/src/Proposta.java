import java.util.Scanner;

public class Proposta {

	private	double total;
	private int parcelas;
	private	String valParcelas;
	private String cpfProposta;
	private char status;	

	public Proposta() {

	}

	public Proposta(double total, int parcelas, String valParcelas, String cpfProposta, char status) {
		this.total = total;
		this.parcelas = parcelas;
		this.valParcelas = valParcelas;
		this.cpfProposta = cpfProposta;
		this.status=status;
	}

	public void solicitaProposta() {

		String cpfProposta, valParcelas;
		int parcelas;
		char confirma, status;
		double valor, total;

		Proposta objProposta; 

		Scanner input = new Scanner(System.in);
		Scanner inputString=new Scanner(System.in);

		System.out.println("\nDigite o CPF que realizará a proposta:");
		cpfProposta=inputString.next();

		System.out.println("\nQual o valor desejado para o empréstimo? ");
		valor=input.nextDouble();

		System.out.println("\nQual a quantidade de parcelas? ");
		parcelas=(int) input.nextDouble();

		total=(((valor*10)/100)+valor);
		valParcelas=String.format("%.2f",total/parcelas);

		System.out.println("\nValor total com juros de 10%: R$"+total);
		System.out.println("\nValor das parcelas com juros incluido: "+parcelas+"X de R$"+valParcelas);

		System.out.println("\nDeseja confirmar a solicitação de empréstimo ? (s/n)");
		confirma=input.next().charAt(0);
		if(confirma=='s') {
			status='p';																//		<-Status de todas propostas são enviadas como "p"=Pendente, pois serão analisadas pelo banco
			objProposta = new Proposta(total, parcelas, valParcelas, cpfProposta, status);
			ListaProposta.adicionar(objProposta);									//		<-Aqui a solicitação seria encaminhada para a análise do banco 
			System.out.println("Solicitação encaminhada para análise de crédito!");	//		  
		}
		else {
			System.out.println("Deseja realizar uma nova simulação ? (s/n)");
			confirma=input.next().charAt(0);
			if(confirma=='s') {
				this.solicitaProposta();
			}
		}
	}

	public String imprimir() {
		String statusProposta = "";
		if(status=='a') {
			statusProposta="Aprovada";
		}
		else if(status=='p') {
			statusProposta="Pendente";
		}
		else if(status=='n'){
			statusProposta="Negada";
		}
		else {
			System.out.println("Status da proposta inválido!");
		}
		return "Total com juros de 10%: R$" +total+ "\nParcelas: "+parcelas+"\nValor das parcelas: R$"+valParcelas+"\nCPF: "+cpfProposta+"\nStatus: "+statusProposta;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public int getParcelas() {
		return parcelas;
	}

	public void setParcelas(int parcelas) {
		this.parcelas = parcelas;
	}

	public String getValParcelas() {
		return valParcelas;
	}

	public void setValParcelas(String valParcelas) {
		this.valParcelas = valParcelas;
	}

	public String getCpfProposta() {
		return cpfProposta;
	}

	public void setCpfProposta(String cpfProposta) {
		this.cpfProposta = cpfProposta;
	}

	public char getStatus() {
		return status;
	}

	public void setStatus(char status) {
		this.status = status;
	}

}
