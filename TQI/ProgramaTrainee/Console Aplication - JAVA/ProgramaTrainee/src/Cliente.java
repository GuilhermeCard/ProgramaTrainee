import java.util.Scanner;

public class Cliente {

	private String nome;
	private String cpf;
	private	String telefone;
	private	String email;
	private	String senha;

	public Cliente() {

	}

	public Cliente(String nome, String cpf, String telefone, String email, String senha) {
		this.nome = nome;
		this.cpf = cpf;
		this.telefone = telefone;
		this.email = email;
		this.senha = senha;
	}

	public void realizarCadastro() {

		Cliente objCliente; 

		Scanner input = new Scanner(System.in);

		System.out.print("Digite seu nome completo: ");
		setNome(input.nextLine()); 

		System.out.print("Digite os numeros do seu cpf: ");
		setCpf(input.nextLine());										

		System.out.print("Digite seu telefone: ");	//					<-Recebe os dados informados pelo usuario para criação do cadastro//
		setTelefone(telefone = input.nextLine());

		System.out.print("Digite seu email: ");
		setEmail(input.nextLine());

		System.out.print("Digite sua senha: ");
		setSenha(input.nextLine()); 

		objCliente=new Cliente(nome, cpf, telefone, email, senha);
		ListaCliente.adicionar(objCliente); 	//										<- Insere os dados do cliente no ArrayList de clientes//

		System.out.println("Dados cadastrados com sucesso. \n");
	}

	public boolean login() {

		Scanner input = new Scanner(System.in);

		System.out.println("Para realizar login, insira os dados a seguir... \n");

		System.out.print("Digite seu email: ");
		String usuario = input.nextLine();

		System.out.print("Digite sua senha: ");
		String password = input.nextLine();	

		for(int i=0; i<ListaCliente.getListaCliente().size(); i++) {

			if(usuario.equals(ListaCliente.getListaCliente().get(i).getEmail()) && (password.equals(ListaCliente.getListaCliente().get(i).getSenha()))){				
				return true;											
			}
		}

		return false;

	}


	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}


