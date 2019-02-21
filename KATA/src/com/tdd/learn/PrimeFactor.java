package com.tdd.learn;

import java.util.ArrayList;
import java.util.List;

public class PrimeFactor implements FindFactor 
{
	PrimeFactor aFactor;
	@Override
	public List<Integer> getFactors(int number) 
	{
		// TODO Auto-generated method stub
		List<Integer> aFactor =new ArrayList<Integer>();
		if(number==1)
			aFactor=null;
		return aFactor;
	}

}
