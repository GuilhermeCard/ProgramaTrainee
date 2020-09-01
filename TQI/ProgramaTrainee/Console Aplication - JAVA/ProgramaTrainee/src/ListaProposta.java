import java.util.ArrayList;

public class ListaProposta {
	private static ArrayList<Proposta> listaProposta = new ArrayList<>();

	public static ArrayList<Proposta> getListaProposta() {
		return listaProposta;
	}

	public static void setListaProposta(ArrayList<Proposta> listaProposta) {
		ListaProposta.listaProposta = listaProposta;
	}

	public static void adicionar(Proposta p) {
		listaProposta.add(p);
	}

	public static String consultarPropostas(String cpf) {

		String saida="";
		int i = 1;

		for(Proposta p: listaProposta) {
			if(p.getCpfProposta().equals(cpf)) {
				saida += "\n=== Proposta Nº "+ (i++) + " ==="+"\n";
				saida += p.imprimir() + "\n";				 			
			}
		}
		return saida;
	}
}
