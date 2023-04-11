public class FrogJmp {
    public int solution(int X, int Y, int D){
        int distance = Y-X;
        int jumps = (int)Math.ceil(distance/(double)D);

        return jumps;

    }

    public static void main(String args[]) {
        FrogJmp FJ = new FrogJmp();
        System.out.println(FJ.solution(10,85,30));

    }
}
