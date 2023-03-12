import React from 'react';
import {gql} from '../__generated__';
import {useQuery} from '@apollo/client';
import brokenImageSvg from '../assets/broken-image.svg';
import {Box, chakra, Flex, HStack, VStack} from '@chakra-ui/react';

function Pokemons() {
  const {data} = useQuery(GET_DRUGS);

  return (
    <VStack>
      {data?.substances?.map((substance) => (
        <HStack
          w='100%'
          p={2}
          key={substance!.name}
          borderBottom='1px'
          spacing={2}
        >
          <Flex
            w='10rem'
            h='10rem'
            overflow='hidden'
            bg='gray.50'
            borderRadius='3xl'
            padding={4}
            justify='center'
          >
            <chakra.img
              m='auto'
              src={substance?.images![0]!.image!}
              onError={(event) => {
                event.currentTarget.src = brokenImageSvg;
              }}
            />
          </Flex>
          <Box>{substance!.name}</Box>
        </HStack>
      ))}
    </VStack>
  );
}

const GET_DRUGS = gql(/* GraphQL */ `
  query GetDrugs {
    substances {
      name
      url
      commonNames
      summary
      class {
        chemical
        psychoactive
      }
      images {
        thumb
        image
      }
      effects {
        url
        name
      }
      roa {
        oral {
          ...SubstanceRoaFragment
        }
        sublingual {
          ...SubstanceRoaFragment
        }
        buccal {
          ...SubstanceRoaFragment
        }
        insufflated {
          ...SubstanceRoaFragment
        }
        rectal {
          ...SubstanceRoaFragment
        }
        transdermal {
          ...SubstanceRoaFragment
        }
        subcutaneous {
          ...SubstanceRoaFragment
        }
        intramuscular {
          ...SubstanceRoaFragment
        }
        intravenous {
          ...SubstanceRoaFragment
        }
        smoked {
          ...SubstanceRoaFragment
        }
      }
    }
  }

  fragment SubstanceRoaFragment on SubstanceRoa {
    name
    bioavailability {
      max
      min
    }
    dose {
      threshold
      units
      heavy
      light {
        max
        min
      }
      common {
        min
        max
      }
    }
    duration {
      afterglow {
        ...SubstanceRoaDurationRangeFragment
      }
      comeup {
        ...SubstanceRoaDurationRangeFragment
      }
      duration {
        ...SubstanceRoaDurationRangeFragment
      }
      offset {
        ...SubstanceRoaDurationRangeFragment
      }
      onset {
        ...SubstanceRoaDurationRangeFragment
      }
      peak {
        ...SubstanceRoaDurationRangeFragment
      }
      total {
        ...SubstanceRoaDurationRangeFragment
      }
    }
  }

  fragment SubstanceRoaDurationRangeFragment on SubstanceRoaDurationRange {
    min
    max
    units
  }
`);

export default Pokemons;
