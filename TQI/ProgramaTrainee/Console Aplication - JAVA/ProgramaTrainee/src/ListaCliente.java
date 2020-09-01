import java.util.ArrayList;

public class ListaCliente {
	private static ArrayList<Cliente> listaCliente = new ArrayList<>();

	public static ArrayList<Cliente> getListaCliente() {
		return listaCliente;
	}

	public static void setListaCliente(ArrayList<Cliente> listaCliente) {
		ListaCliente.listaCliente = listaCliente;
	}

	public static void adicionar(Cliente c) {
		listaCliente.add(c);
	}
}
