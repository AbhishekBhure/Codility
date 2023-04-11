import java.util.HashSet;

public class Distinct {
    public int solution(int[] A){

        HashSet<Integer> hash = new HashSet<>();
        for(int a : A){
            hash.add(a);

        }
        return hash.size();

    }
    public static void main(String[] args){
        Distinct D = new Distinct();
        System.out.println(D.solution(new int[]{2,1,1,2,3,1}));
    }

}
