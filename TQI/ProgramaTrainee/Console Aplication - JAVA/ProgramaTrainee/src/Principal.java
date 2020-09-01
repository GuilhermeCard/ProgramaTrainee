import java.util.Scanner;

public class Principal {

	public static void main(String[] args) {
		Scanner input=new Scanner(System.in);
		Scanner inputString=new Scanner(System.in);

		String cpf;
		int menu, menuPrincipal;
		do {
			mostraMenuPrincipal();
			menuPrincipal=input.nextInt();

			switch (menuPrincipal) {

			case 1:
				System.out.println("==> Realizar Cadastro");
				Cliente c = new Cliente();
				c.realizarCadastro();
				break;

			case 2:
				System.out.println("==> Realizar Login");
				Cliente l = new Cliente();
				if(l.login()==true) {
					do {
						mostraMenu();
						menu=input.nextInt();

						switch (menu) {

						case 1:						
							System.out.println("==> Solicitar Proposta");						//Fazer solicitação

							Proposta p = new Proposta();
							p.solicitaProposta();

							break;

						case 2:
							System.out.println("==> Consultar Propostas");						//Consultar Propostas

							System.out.println("\nDigite o CPF das propostas: ");			
							cpf=inputString.next();
							System.out.println(ListaProposta.consultarPropostas(cpf));

							break;

						case 3:

							break;

						default:
							System.out.println("Opção inválida!");
							break;
						}

					}while(menu != 3);
				}
				else{
					System.out.println("Dados incorretos! Tente novamente.");

				};
				break;

			case 3:

				break;

			default:
				System.out.println("Opção inválida!");
				break;
			}

		}while(menuPrincipal != 3);

	}

	static void mostraMenu() {
		System.out.println("================ MENU ================");
		System.out.println("1 - Fazer solicitação de empréstimo");
		System.out.println("2 - Consultar Propostas");
		System.out.println("3 - Sair");
		System.out.println("=> Escolha uma opção: ");
	}

	static void mostraMenuPrincipal() {
		System.out.println("================ HOME ================");
		System.out.println("1 - Não tenho cadastro");
		System.out.println("2 - Realizar Login");
		System.out.println("3 - Sair");
		System.out.println("=> Escolha uma opção: ");
	}
}

